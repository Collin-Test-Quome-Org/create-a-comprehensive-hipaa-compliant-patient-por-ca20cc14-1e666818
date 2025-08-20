import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

export function MaintenancePageContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <Alert className="flex flex-col items-center p-8">
          <Wrench className="w-12 h-12 text-primary mb-4 animate-spin-slow" />
          <AlertTitle className="font-bold text-2xl mb-2">Scheduled Maintenance</AlertTitle>
          <AlertDescription className="text-base text-center mb-6">
            The HIPAA Secure Patient Portal is currently undergoing routine maintenance to ensure optimal security and reliability.<br />
            We appreciate your patience and commitment to secure healthcare management.
          </AlertDescription>
          <Button asChild variant="outline" id="maintenance-contact-btn" className="w-52">
            <a href="mailto:support@secureportal.com">Contact Support</a>
          </Button>
        </Alert>
      </motion.div>
    </div>
  )
}
