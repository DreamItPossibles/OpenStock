'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import InputField from '@/components/forms/InputField';
import FooterLink from '@/components/forms/FooterLink';
import {signInWithEmail, signUpWithEmail} from "@/lib/actions/auth.actions";
import {toast} from "sonner";
import {signInEmail} from "better-auth/api";
import {useRouter} from "@/i18n/routing";
import OpenDevSocietyBranding from "@/components/OpenDevSocietyBranding";
import React from "react";
import {useTranslations} from 'next-intl';

const SignIn = () => {
    const t = useTranslations('Auth');
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            const result = await signInWithEmail(data);
            if (result.success) {
                router.push('/');
                return;
            }
            toast.error('Sign in failed', {
                description: result.error ?? 'Invalid email or password.',
            });
        } catch (e) {
            console.error(e);
            toast.error('Sign in failed', {
                description: e instanceof Error ? e.message : 'Failed to sign in.'
            })
        }
    }

    return (
        <>
            <h1 className="form-title">{t('welcomeBack')}</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label={t('email')}
                    placeholder={t('emailPlaceholder')}
                    register={register}
                    error={errors.email}
                    validation={{
                      required: t('emailRequired'),
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                        message: t('emailInvalid')
                      }
                    }}
                />

                <InputField
                    name="password"
                    label={t('password')}
                    placeholder={t('passwordPlaceholder')}
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: t('passwordRequired'), minLength: 8 }}
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? t('signingIn') : t('signIn')}
                </Button>

                <FooterLink text={t('noAccount')} linkText={t('createAccount')} href="/sign-up" />
                <OpenDevSocietyBranding outerClassName="mt-10 flex justify-center"/>
            </form>
        </>
    );
};
export default SignIn;
