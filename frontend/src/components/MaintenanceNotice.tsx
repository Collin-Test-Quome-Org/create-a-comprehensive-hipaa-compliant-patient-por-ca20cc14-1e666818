import { Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

/**
 * Maintenance notice component for patient portal
 */
export function MaintenanceNotice() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        <Card className="shadow-xl border-blue-200 max-w-md mx-auto">
          <CardContent className="flex flex-col items-center pt-10 pb-8 px-8">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <Wrench className="text-blue-700 w-12 h-12" />
            </div>
            <h2 className="font-bold text-2xl text-blue-900 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>System Maintenance</h2>
            <p className="text-slate-600 mb-6 text-center">
              For your security, our trusted platform is undergoing scheduled maintenance.<br />
              Please check back soon! If you need immediate assistance, contact our support team.
            </p>
            <a
              href="mailto:support@hipaasecureportal.com"
              className="w-full"
              tabIndex={0}
              id="contact-support-btn"
            >
              <Button className="w-full" variant="secondary">
                Contact Support
              </Button>
            </a>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
