import { Button } from '@/components/ui/button'
import { Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

export function ErrorMaintenance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[60vh] bg-secondary rounded-xl shadow-lg p-10 mx-auto max-w-xl"
      role="status"
      aria-live="polite"
    >
      <span className="inline-flex items-center justify-center rounded-full bg-slate-100 p-4 mb-4">
        <Wrench size={48} className="text-primary" />
      </span>
      <h1 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
        Scheduled System Maintenance
      </h1>
      <p className="text-lg text-muted-foreground mb-6 max-w-md text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
        For your safety, we're enhancing our encryption shields and updating secure pathways. The portal will be back up and running soon.<br />
        Need urgent help?
      </p>
      <Button
        asChild
        variant="outline"
        id="maintenance-contact-support-btn"
        className="px-8 py-2 text-lg"
      >
        <a href="mailto:support@hipaasecureportal.com" target="_blank" rel="noopener noreferrer">
          Contact Support
        </a>
      </Button>
    </motion.div>
  )
}
