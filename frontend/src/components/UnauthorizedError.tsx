import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Unauthorized access error component for patient portal
 */
export function UnauthorizedError() {
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
              <AlertCircle className="text-blue-700 w-12 h-12" />
            </div>
            <h2 className="font-bold text-2xl text-blue-900 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Access Denied</h2>
            <p className="text-slate-600 mb-6 text-center">
              Oops! For your privacy and security, you need to be logged in with the appropriate access to view this page.<br />
              Please log in to continue.
            </p>
            <Button asChild id="to-login-btn" className="w-full">
              <Link to="/login">Return to Secure Login</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
