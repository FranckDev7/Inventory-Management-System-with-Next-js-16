import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldGroup,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaUserAlt } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';

export default function LoginPage() {
  return (
    <div
      className={
        'flex min-h-screen flex-col items-center justify-center max-[541px]:pt-14 md:flex-row'
      }
    >
      <div className={'w-full md:w-[30%]'}>
        <form className={'px-5'}>
          <div className={'flex items-center justify-center'}>
            <Image src={'/userSVG.svg'} alt={'user'} width={35} height={35} />
          </div>
          <p className={'mt-2 mb-2 text-center text-sm'}>
            Suivez vos stocks de carburant et optimisez vos approvisionnements
          </p>

          <Button
            aria-label="Se connecter avec Google"
            className={'mb-2 w-full cursor-pointer py-5'}
            variant={'outline'}
            size={'lg'}
          >
            Se connecter avec Google
            <FcGoogle />
          </Button>

          <FieldGroup>
            {/* Email */}
            <Field>
              <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
              <div className="relative">
                <Mail className="absolute top-[25%] left-[90%] h-5 w-5" />
                <Input
                  id="fieldgroup-email"
                  type="email"
                  placeholder="name@example.com"
                  className={'py-5'}
                />
              </div>
              <FieldDescription>
                Nous enverrons les mises à jours sur cette adresse.
              </FieldDescription>
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="fieldgroup-password">
                Mot de passe
              </FieldLabel>
              <div className={'relative'}>
                <Eye className="absolute top-[25%] left-[90%] h-5 w-5" />
                <Input
                  id="fieldgroup-password"
                  type="password"
                  placeholder="minimum 8 caractères"
                  className={'py-5'}
                />
              </div>
              <FieldDescription>
                Votre mot de passe doit contenir au moins 8 caractères.
              </FieldDescription>
            </Field>

            <div className={'flex items-center justify-between'}>
              <div className={'w-1/2]'}>
                {/* Check */}
                <Field orientation="horizontal">
                  <Checkbox
                    id="terms-checkbox-basic"
                    name="terms-checkbox-basic"
                  />
                  <FieldLabel htmlFor="terms-checkbox-basic">
                    Se souvenir de moi
                  </FieldLabel>
                </Field>
              </div>
              <div className={'w-1/2] text-sm'}>Mot de passe oublié?</div>
            </div>

            <Button size={'lg'} className={'cursor-pointer py-5'}>
              Se connecter
              <FaUserAlt />
            </Button>

            <small className={'text-center'}>
              Pas de compte?{' '}
              <Link href={'/register'} className={'text-blue-500'}>
                Créer un nouveau compte
              </Link>
            </small>
          </FieldGroup>
        </form>
      </div>
      <div className="relative aspect-4/3 w-full md:w-[60%]">
        <Image
          src="/chargement_petrole.jpg"
          fill
          alt="login"
          className="object-contain p-4"
        />
      </div>
    </div>
  );
}
