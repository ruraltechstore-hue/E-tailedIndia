import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import * as Icons from 'lucide-react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';
import { supabase } from '../../lib/supabase';
import type { Database } from '../../lib/database.types';

type Service = Database['public']['Tables']['services']['Row'];
type ServiceCategory = Database['public']['Tables']['service_categories']['Row'];

export default function AllServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    filterServices();
  }, [services, selectedCategory, searchQuery]);

  const loadData = async () => {
    const [servicesRes, categoriesRes] = await Promise.all([
      supabase.from('services').select('*').eq('is_active', true).order('name'),
      supabase.from('service_categories').select('*').eq('is_active', true).order('sort_order'),
    ]);

    if (servicesRes.data) setServices(servicesRes.data);
    if (categoriesRes.data) setCategories(categoriesRes.data);
  };

  const filterServices = () => {
    let filtered = services;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((s) => s.category_id === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  };

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.Sparkles;
    return Icon;
  };

  const getCategoryById = (id: string) => {
    return categories.find((c) => c.id === id);
  };

  return (
    <section id="all-services" className="py-20 bg-brand-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            All Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete range of 100+ services across all categories
          </p>
        </div>

        <div className="mb-8 space-y-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-subtle"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-subtle bg-white"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 text-gray-600">
          Showing <span className="font-bold text-gray-900">{filteredServices.length}</span> services
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const Icon = getIcon(service.icon);
            const category = getCategoryById(service.category_id);
            return (
              <Card key={service.id} hover>
                <CardBody className="p-6 flex flex-col space-y-4 h-full">
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${category?.color || '#0052cc'}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category?.color || '#0052cc' }} />
                    </div>
                    {service.requires_kyc && (
                      <span className="text-xs bg-warning-muted text-warning-foreground px-2 py-1 rounded-full font-semibold">
                        KYC Required
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  {category && (
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">{category.name}</span>
                    </div>
                  )}
                  <Button variant="outline" size="sm" className="w-full">
                    Apply Now
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}
