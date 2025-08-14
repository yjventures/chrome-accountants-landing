'use client'

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings } from 'lucide-react'
import Button from '@/components/ui/Button'

interface ConsentSettings {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

const ConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consentSettings, setConsentSettings] = useState<ConsentSettings>({
    essential: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const hasConsent = localStorage.getItem('ca-consent')
    if (!hasConsent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('ca-consent', JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    const consent = { ...consentSettings, timestamp: new Date().toISOString() }
    localStorage.setItem('ca-consent', JSON.stringify(consent))
    setIsVisible(false)
    setShowSettings(false)
  }

  const handleDeclineAll = () => {
    const consent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('ca-consent', JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleSettingChange = (setting: keyof ConsentSettings, value: boolean) => {
    setConsentSettings(prev => ({ ...prev, [setting]: value }))
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop for settings */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-xl z-[1040]"
              onClick={() => setShowSettings(false)}
            />
          )}

          {/* Settings Modal */}
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                className="fixed z-[1050] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           w-[min(92vw,32rem)] max-h-[80vh] overflow-y-auto
                           surface-card p-6 rounded-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-jakarta font-bold text-xl text-white">
                    Cookie Settings
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-textSecondary hover:text-textPrimary transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Essential Cookies */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-jakarta font-semibold text-white">Essential Cookies</h4>
                        <p className="text-sm text-white">Required for the website to function properly</p>
                      </div>
                      <div className="relative">
                        <input type="checkbox" checked={false} disabled className="sr-only" />
                        <div className="w-11 h-6 bg-accentPurple rounded-full">
                          <div className="w-5 h-5 bg-white rounded-full shadow translate-x-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-jakarta font-semibold text-white">Analytics Cookies</h4>
                        <p className="text-sm text-white">Help us understand how visitors interact with our website</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('analytics', !consentSettings.analytics)}
                        className="relative"
                        aria-pressed={consentSettings.analytics}
                      >
                        <div className={`w-11 h-6 rounded-full transition-colors ${consentSettings.analytics ? 'bg-accentPurple' : 'bg-gray-600'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${consentSettings.analytics ? 'translate-x-5' : 'translate-x-0'}`} />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-jakarta font-semibold text-white">Marketing Cookies</h4>
                        <p className="text-sm text-white">Used to deliver relevant advertisements</p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('marketing', !consentSettings.marketing)}
                        className="relative"
                        aria-pressed={consentSettings.marketing}
                      >
                        <div className={`w-11 h-6 rounded-full transition-colors ${consentSettings.marketing ? 'bg-accentPurple' : 'bg-gray-600'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${consentSettings.marketing ? 'translate-x-5' : 'translate-x-0'}`} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <Button variant="primary" size="sm" className="flex-1" onClick={handleDeclineAll}>
                    Decline All
                  </Button>
                  <Button variant="primary" size="sm" className="flex-1" onClick={handleAcceptSelected}>
                    Save Settings
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Consent Bar (wrapper is not animated to avoid Safari overflow) */}
          <div
            className="fixed bottom-0 inset-x-0 w-screen bg-white border-t border-borderSubtle
                       z-[1030] overflow-x-clip"
          >
            {/* Animate only the inner content */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="p-4 md:p-6"
            >
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-w-full">
                  <div className="flex-1 min-w-0">
                    <p className="text-black text-sm md:text-base leading-relaxed">
                      We use cookies to enhance your experience and analyze site usage.
                      By continuing, you consent to our{' '}
                      <a
                        href="/data/privacy-policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accentPurple hover:underline break-words"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setShowSettings(true)}
                      className="w-full sm:w-auto"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Manage Settings
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleAcceptAll}
                      className="w-full sm:w-auto"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ConsentPopup
