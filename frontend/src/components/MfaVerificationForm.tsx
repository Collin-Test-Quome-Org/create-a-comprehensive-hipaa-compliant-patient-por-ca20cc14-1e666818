import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useNavigate } from 'react-router-dom'
import { Loader2, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

// Fake API integration for demonstration
const fakeVerifyMfa = async (code: string) => {
  await new Promise(res => setTimeout(res, 1200));
  if (code === '123456') {
    return { success: true }
  }
  throw new Error('Invalid MFA code. Please try again.')
}

export function MfaVerificationForm() {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resent, setResent] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fakeVerifyMfa(code)
      if (res.success) {
        // Assume patient for demo; in real app, check role and redirect accordingly
        navigate('/dashboard')
      }
    } catch (err: any) {
      setError(err.message || 'Verification failed')
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    setResent(false)
    setLoading(true)
    setTimeout(() => {
      setResent(true)
      setLoading(false)
    }, 1000)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="max-w-md mx-auto shadow-xl border-primary/20">
        <CardHeader className="flex flex-row items-center gap-3">
          <ShieldCheck className="text-primary h-8 w-8" />
          <div>
            <CardTitle className="font-nunito font-bold text-2xl">Multi-Factor Authentication</CardTitle>
            <CardDescription className="text-secondary-foreground">For your security, please enter the 6-digit code from your authenticator or SMS.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Form>
            <form onSubmit={handleSubmit}>
              <FormField name="mfa-code" id="mfa-code">
                <FormItem>
                  <FormLabel htmlFor="mfa-code">Verification Code</FormLabel>
                  <FormControl>
                    <Input
                      id="mfa-code"
                      name="mfa-code"
                      type="text"
                      inputMode="numeric"
                      autoFocus
                      maxLength={6}
                      minLength={6}
                      required
                      autoComplete="one-time-code"
                      placeholder="Enter your 6-digit code"
                      value={code}
                      onChange={e => setCode(e.target.value.replace(/[^0-9]/g, ''))}
                      className="tracking-widest text-lg text-center font-mono mb-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              {error && <div className="text-destructive font-medium my-2" data-testid="mfa-error">{error}</div>}
              <Button
                id="verify-mfa-button"
                type="submit"
                className="w-full mt-2 font-bold"
                disabled={loading || code.length !== 6}
              >
                {loading ? <Loader2 className="animate-spin h-5 w-5 mx-auto" /> : 'Verify'}
              </Button>
              <div className="flex justify-between items-center mt-4">
                <Button
                  id="resend-mfa-code"
                  type="button"
                  variant="link"
                  className="text-primary text-sm px-0"
                  onClick={handleResend}
                  disabled={loading}
                >
                  Resend Code
                </Button>
                {resent && <span className="text-green-700 text-xs font-medium animate-fade-in">Code sent!</span>}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
