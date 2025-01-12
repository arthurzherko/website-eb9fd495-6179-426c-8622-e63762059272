import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Twitch } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gamer-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-gamer-neon">Gaming Room</h3>
            <p className="text-gray-400">
              Лучшее игровое пространство для настоящих геймеров
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Навигация</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gamer-neon">Главная</a></li>
              <li><a href="#" className="hover:text-gamer-neon">Цены</a></li>
              <li><a href="#" className="hover:text-gamer-neon">Игры</a></li>
              <li><a href="#" className="hover:text-gamer-neon">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Правила</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gamer-neon">Правила посещения</a></li>
              <li><a href="#" className="hover:text-gamer-neon">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-gamer-neon">Публичная оферта</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-gamer-neon"
              >
                <Twitch className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-gamer-neon"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-gamer-neon"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-gamer-neon"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gamer-neon/20" />

        <div className="text-center text-sm text-gray-400">
          © 2024 Gaming Room. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
