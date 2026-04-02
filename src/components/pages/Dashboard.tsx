import { LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Card, { CardBody, CardHeader } from '../ui/Card';
import Button from '../ui/Button';

export default function Dashboard() {
  const { profile, signOut } = useAuth();

  const getRoleDisplay = (role: string) => {
    return role
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome, {profile?.full_name}!
              </h1>
              <p className="text-gray-600 mt-1">
                Role:{' '}
                <span className="font-semibold text-brand">
                  {getRoleDisplay(profile?.role || '')}
                </span>
              </p>
            </div>
            <Button variant="outline" onClick={signOut}>
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold text-gray-900">Updates</h3>
          </CardHeader>
          <CardBody className="p-6 space-y-6">
            <div className="rounded-xl bg-brand-subtle p-4 border border-brand-muted">
              <p className="text-lg font-semibold text-brand">
                You will be shortly notified
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Our team is preparing your next onboarding step and will notify
                you soon.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-gray-900">
                Meet Details
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Meeting:</span>{' '}
                  Onboarding Call
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    Date & Time:
                  </span>{' '}
                  To be scheduled (TBA)
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Join Link:</span>{' '}
                  A Google Meet link will be shared with you shortly.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
