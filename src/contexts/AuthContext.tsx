import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Profile = Database['public']['Tables']['profiles']['Row'];

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, userData: { full_name: string; phone: string }) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const demoUser = localStorage.getItem('demo-user');
    const demoProfile = localStorage.getItem('demo-profile');

    if (demoUser && demoProfile) {
      setUser(JSON.parse(demoUser));
      setProfile(JSON.parse(demoProfile));
      setSession({
        access_token: 'demo-token',
        refresh_token: 'demo-refresh',
        expires_in: 3600,
        expires_at: Date.now() / 1000 + 3600,
        token_type: 'bearer',
        user: JSON.parse(demoUser),
      } as Session);
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      (async () => {
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) {
          await loadProfile(session.user.id);
        }
        setLoading(false);
      })();
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      (async () => {
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) {
          await loadProfile(session.user.id);
        } else {
          setProfile(null);
        }
      })();
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (!error && data) {
      setProfile(data);
    }
  };

  const signUp = async (email: string, password: string, userData: { full_name: string; phone: string }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
      const { error: profileError } = await supabase.from('profiles').insert({
        id: data.user.id,
        email,
        full_name: userData.full_name,
        phone: userData.phone,
        role: 'retailer',
      });

      if (profileError) throw profileError;

      const { error: walletError } = await supabase.from('wallets').insert({
        user_id: data.user.id,
      });

      if (walletError) throw walletError;
    }
  };

  const signIn = async (email: string, password: string) => {
    const demoAccounts: Record<string, { password: string; profile: Partial<Profile> }> = {
      'admin@etaileddigital.com': {
        password: 'admin123',
        profile: {
          id: 'demo-admin-id',
          full_name: 'Admin User',
          email: 'admin@etaileddigital.com',
          phone: '+918125752562',
          role: 'admin',
          kyc_status: 'verified',
          is_active: true,
          kyc_documents: {},
          photo_url: null,
          address: null,
          state: null,
          district: null,
          certificate_id: null,
          id_card_url: null,
          parent_id: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      },
      'whitelabel@etaileddigital.com': {
        password: 'white123',
        profile: {
          id: 'demo-whitelabel-id',
          full_name: 'White Label Partner',
          email: 'whitelabel@etaileddigital.com',
          phone: '+918125752563',
          role: 'white_label',
          kyc_status: 'verified',
          is_active: true,
          kyc_documents: {},
          photo_url: null,
          address: null,
          state: null,
          district: null,
          certificate_id: null,
          id_card_url: null,
          parent_id: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      },
      'superdist@etaileddigital.com': {
        password: 'super123',
        profile: {
          id: 'demo-superdist-id',
          full_name: 'Super Distributor User',
          email: 'superdist@etaileddigital.com',
          phone: '+918125752564',
          role: 'super_distributor',
          kyc_status: 'verified',
          is_active: true,
          kyc_documents: {},
          photo_url: null,
          address: null,
          state: null,
          district: null,
          certificate_id: null,
          id_card_url: null,
          parent_id: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      },
      'distributor@etaileddigital.com': {
        password: 'dist123',
        profile: {
          id: 'demo-dist-id',
          full_name: 'Distributor User',
          email: 'distributor@etaileddigital.com',
          phone: '+918125752565',
          role: 'distributor',
          kyc_status: 'verified',
          is_active: true,
          kyc_documents: {},
          photo_url: null,
          address: null,
          state: null,
          district: null,
          certificate_id: null,
          id_card_url: null,
          parent_id: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      },
      'retailer@etaileddigital.com': {
        password: 'retail123',
        profile: {
          id: 'demo-retailer-id',
          full_name: 'Retailer User',
          email: 'retailer@etaileddigital.com',
          phone: '+918125752566',
          role: 'retailer',
          kyc_status: 'verified',
          is_active: true,
          kyc_documents: {},
          photo_url: null,
          address: null,
          state: null,
          district: null,
          certificate_id: null,
          id_card_url: null,
          parent_id: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      },
    };

    const demoAccount = demoAccounts[email.toLowerCase()];
    if (demoAccount && demoAccount.password === password) {
      const mockUser = {
        id: demoAccount.profile.id!,
        email: email,
        aud: 'authenticated',
        role: 'authenticated',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        app_metadata: {},
        user_metadata: {},
      } as User;

      setUser(mockUser);
      setProfile(demoAccount.profile as Profile);
      setSession({
        access_token: 'demo-token',
        refresh_token: 'demo-refresh',
        expires_in: 3600,
        expires_at: Date.now() / 1000 + 3600,
        token_type: 'bearer',
        user: mockUser,
      } as Session);

      localStorage.setItem('demo-user', JSON.stringify(mockUser));
      localStorage.setItem('demo-profile', JSON.stringify(demoAccount.profile));
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  };

  const signOut = async () => {
    localStorage.removeItem('demo-user');
    localStorage.removeItem('demo-profile');

    const { error } = await supabase.auth.signOut();
    if (error && !localStorage.getItem('demo-user')) throw error;

    setUser(null);
    setProfile(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, session, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
