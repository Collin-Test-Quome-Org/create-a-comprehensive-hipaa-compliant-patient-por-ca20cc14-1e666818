import { Button } from '@/components/ui/button'
import { Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

export function ErrorMaintenance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-secondary p-8 rounded-xl shadow-lg mx-auto max-w-lg mt-12">
      <motion.div
        initial={{ scale: 0.7, rotate: 10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 14 }}
        className="mb-4"
      >
        <Wrench size={64} className="text-primary" />
      </motion.div>
      <h1 className="text-3xl font-bold mb-2 text-primary font-nunito">Portal Under Maintenance</h1>
      <p className="text-lg text-gray-700 mb-6 text-center font-nunito">
        Our digital vault is getting a tune-up for even stronger security and a better experience.<br />
        Please check back soon.<br />
        If you need urgent assistance, contact our support team below.
      </p>
      <Button id="maintenance-support-btn" asChild>
        <a href="mailto:support@hipaasecureportal.com">Contact Support</a>
      </Button>
    </div>
  )
}
