import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="bg-gamer-dark-accent py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gamer-neon animate-glow">
          Связаться с нами
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="rounded-lg border border-gamer-neon bg-gamer-dark p-6">
              <h3 className="mb-4 text-xl font-bold text-gamer-neon">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-gamer-purple" />
                  <span>ул. Геймерская, 42, Москва</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5 text-gamer-blue" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-5 w-5 text-gamer-red" />
                  <span>info@gamingroom.ru</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gamer-purple bg-gamer-dark p-6">
              <h3 className="mb-4 text-xl font-bold text-gamer-purple">Режим работы</h3>
              <p className="text-gray-300">Ежедневно: 10:00 - 23:00</p>
              <p className="text-gray-300">Ночные сеансы: по предварительной записи</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-lg border border-gamer-neon bg-gamer-dark p-6"
          >
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  className="border-gamer-neon/50 bg-gamer-dark-accent text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-gamer-neon/50 bg-gamer-dark-accent text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Ваше сообщение"
                  className="min-h-[150px] border-gamer-neon/50 bg-gamer-dark-accent text-white placeholder:text-gray-500"
                />
              </div>
              
              <Button className="w-full bg-gamer-neon text-gamer-dark hover:bg-gamer-neon/90">
                Отправить сообщение
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
