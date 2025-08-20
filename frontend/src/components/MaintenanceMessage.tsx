import { ShieldCheck } from "lucide-react"
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function MaintenanceMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center p-8 rounded-xl bg-white shadow-lg max-w-md mx-auto mt-20 border border-blue-200 text-center"
    >
      <div className="bg-blue-50 rounded-full p-4 mb-4">
        <ShieldCheck className="text-blue-700 w-10 h-10" />
      </div>
      <h1 className="font-bold text-2xl mb-2 text-gray-900" style={{fontFamily: 'Nunito'}}>System Maintenance</h1>
      <p className="text-gray-700 mb-6">We're fortifying your data vault! The HIPAA Secure Patient Portal is temporarily down for scheduled maintenance. <br />
        Please check back soon for a more secure and seamless experience.
      </p>
      <Button id="contact-support-btn" asChild variant="outline" className="w-full">
        <a href="mailto:support@hipaasecureportal.com">Contact Support</a>
      </Button>
    </motion.div>
  )
}
