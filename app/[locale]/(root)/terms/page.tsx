import { Metadata } from 'next';
import { Shield, FileText, Check, AlertTriangle, Scale } from 'lucide-react';
import {useTranslations} from 'next-intl';

export const metadata: Metadata = {
  title: 'Terms of Service | OpenStock',
  description: 'Fair, transparent, and open terms for our community.',
};

export default function TermsPage() {
  const t = useTranslations('Terms');
  return (
    <div className="max-w-4xl mx-auto px-4 pb-20">

      {/* Hero */}
      <div className="text-center pt-16 pb-12 space-y-4">
        <div className="inline-flex p-3 bg-teal-500/10 rounded-2xl border border-teal-500/20 mb-4">
          <Scale className="text-teal-400 h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">{t('title')}</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <p className="text-sm text-gray-500">{t('lastUpdated')}</p>
      </div>

      <div className="space-y-12">
        {/* Core Philosophy */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="text-teal-500" />
            {t('promise')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <PromiseItem text={t('promise1')} />
            <PromiseItem text={t('promise2')} />
            <PromiseItem text={t('promise3')} />
            <PromiseItem text={t('promise4')} />
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-yellow-900/10 border border-yellow-500/20 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-yellow-500 shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold text-yellow-100 mb-2">{t('disclaimerTitle')}</h3>
              <p className="text-yellow-200/80 leading-relaxed">
                {t('disclaimerBody')}
              </p>
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">{t('communityRules')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">✅ {t('dos')}</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2"><Check size={16} className="text-blue-500 mt-1" /> {t('do1')}</li>
                <li className="flex gap-2"><Check size={16} className="text-blue-500 mt-1" /> {t('do2')}</li>
                <li className="flex gap-2"><Check size={16} className="text-blue-500 mt-1" /> {t('do3')}</li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-red-400 mb-4">❌ {t('donts')}</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2"><span className="text-red-500 font-bold">×</span> {t('dont1')}</li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">×</span> {t('dont2')}</li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">×</span> {t('dont3')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-500">
            {t('questions')} <a href="mailto:opendevsociety@gmail.com" className="text-teal-400 hover:underline">opendevsociety@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

function PromiseItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg">
      <div className="bg-teal-500/10 p-1 rounded-full">
        <Check size={14} className="text-teal-400" />
      </div>
      <span className="text-gray-300 font-medium">{text}</span>
    </div>
  );
}
