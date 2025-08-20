import { Ghost } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * 404 Not Found error component for patient portal
 */
export function NotFoundError() {
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
              <Ghost className="text-blue-700 w-12 h-12" />
            </div>
            <h2 className="font-bold text-2xl text-blue-900 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>404: Page Not Found</h2>
            <p className="text-slate-600 mb-6 text-center">
              Looks like this secure hallway leads to nowhere.<br />
              Return to your patient dashboard or try another link!
            </p>
            <Button asChild id="to-home-btn" className="w-full">
              <Link to="/dashboard">Back to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
