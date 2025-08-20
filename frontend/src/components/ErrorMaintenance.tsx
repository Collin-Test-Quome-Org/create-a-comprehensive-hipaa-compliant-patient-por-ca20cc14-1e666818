import { Button } from '@/components/ui/button'
import { Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

export function ErrorMaintenance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-slate-50 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        className="bg-white rounded-2xl shadow-xl px-10 py-12 flex flex-col items-center"
      >
        <Wrench className="text-[#1d4ed8] mb-4 w-16 h-16 animate-spin-slow" />
        <h1 className="font-bold text-3xl mb-2 text-[#1d4ed8] font-nunito">Scheduled Maintenance</h1>
        <p className="text-slate-700 mb-6 text-center max-w-md font-nunito">
          Our Secure Patient Portal is currently undergoing important upgrades to keep your data safe and accessible.<br/>
          We'll be back online soon. For urgent matters, please contact our support team directly.
        </p>
        <Button asChild id="maintenance-contact-btn" className="font-nunito font-bold text-lg px-6 py-2">
          <a href="mailto:support@hipaasecureportal.com">Contact Support</a>
        </Button>
      </motion.div>
    </div>
  )
}
