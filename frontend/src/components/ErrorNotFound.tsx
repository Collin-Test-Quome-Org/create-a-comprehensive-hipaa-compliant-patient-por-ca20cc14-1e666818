import { Button } from '@/components/ui/button'
import { SearchX } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function ErrorNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-secondary p-8 rounded-xl shadow-lg mx-auto max-w-lg mt-12">
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 140, damping: 12 }}
        className="mb-4"
      >
        <SearchX size={64} className="text-primary" />
      </motion.div>
      <h1 className="text-3xl font-bold mb-2 text-primary font-nunito">Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-6 text-center font-nunito">
        Sorry, we couldn't find that page in our secure portal.<br />
        Let's get you back to safety!
      </p>
      <Button id="notfound-home-btn" asChild>
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  )
}
