'use client';

import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import {signUpWithEmail} from "@/lib/actions/auth.actions";
import {useRouter} from "@/i18n/routing";
import {toast} from "sonner";
import OpenDevSocietyBranding from "@/components/OpenDevSocietyBranding";
import React from "react";
import {useTranslations} from 'next-intl';

const SignUp = () => {
    const t = useTranslations('Auth');
    const router = useRouter()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'IN',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    }, );

    const onSubmit = async (data: SignUpFormData) => {
        try {
            const result = await signUpWithEmail(data);
            if (result.success) {
                router.push('/');
                return;
            }
            toast.error('Sign up failed', {
                description: result.error ?? 'We could not create your account.',
            });
        } catch (e) {
            console.error(e);
            toast.error('Sign up failed', {
                description: e instanceof Error ? e.message : 'Failed to create an account.'
            })
        }
    }

    return (
        <>
            <h1 className="form-title">{t('signUpAndPersonalize')}</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="fullName"
                    label={t('fullName')}
                    placeholder={t('fullNamePlaceholder')}
                    register={register}
                    error={errors.fullName}
                    validation={{ required: t('fullNameRequired'), minLength: 2 }}
                />

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
                    placeholder={t('passwordPlaceholderStrong')}
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: t('passwordRequired'), minLength: 8 }}
                />

                <CountrySelectField
                    name="country"
                    label={t('country')}
                    control={control}
                    error={errors.country}
                    required
                />

                <SelectField
                    name="investmentGoals"
                    label={t('investmentGoals')}
                    placeholder={t('investmentGoalPlaceholder')}
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />

                <SelectField
                    name="riskTolerance"
                    label={t('riskTolerance')}
                    placeholder={t('riskLevelPlaceholder')}
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />

                <SelectField
                    name="preferredIndustry"
                    label={t('preferredIndustry')}
                    placeholder={t('industryPlaceholder')}
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? t('creatingAccount') : t('startJourney')}
                </Button>

                <FooterLink text={t('alreadyHaveAccount')} linkText={t('signIn')} href="/sign-in" />

                <OpenDevSocietyBranding outerClassName="mt-10 flex justify-center"/>
            </form>
        </>
    )
}
export default SignUp;
