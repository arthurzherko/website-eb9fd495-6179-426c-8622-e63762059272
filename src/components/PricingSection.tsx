import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function PricingSection() {
  return (
    <section className="bg-gamer-dark-accent py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gamer-neon animate-glow">
          Тарифы и цены
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            whileHover={{ y: -10 }}
            className="flex flex-col"
          >
            <Card className="flex h-full flex-col border-gamer-blue bg-gamer-dark p-6">
              <h3 className="mb-4 text-2xl font-bold text-gamer-blue">Стандарт</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">100₽</span>
                <span className="text-gray-400">/час</span>
              </div>
              <ul className="mb-8 flex-grow space-y-4 text-gray-300">
                <li>✓ Игровой PC</li>
                <li>✓ Широкий выбор игр</li>
                <li>✓ Комфортное кресло</li>
              </ul>
              <Button variant="outline" className="w-full border-gamer-blue text-gamer-blue hover:bg-gamer-blue hover:text-white">
                Выбрать
              </Button>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="flex flex-col"
          >
            <Card className="flex h-full flex-col border-gamer-purple bg-gamer-dark p-6">
              <h3 className="mb-4 text-2xl font-bold text-gamer-purple">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">150₽</span>
                <span className="text-gray-400">/час</span>
              </div>
              <ul className="mb-8 flex-grow space-y-4 text-gray-300">
                <li>✓ PlayStation 5</li>
                <li>✓ Все преимущества Стандарта</li>
                <li>✓ PS Plus игры</li>
                <li>✓ 4K Gaming</li>
              </ul>
              <Button variant="outline" className="w-full border-gamer-purple text-gamer-purple hover:bg-gamer-purple hover:text-white">
                Выбрать
              </Button>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="flex flex-col"
          >
            <Card className="flex h-full flex-col border-gamer-red bg-gamer-dark p-6">
              <h3 className="mb-4 text-2xl font-bold text-gamer-red">VIP</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">2000₽</span>
                <span className="text-gray-400">/ночь</span>
              </div>
              <ul className="mb-8 flex-grow space-y-4 text-gray-300">
                <li>✓ Ночной пакет (8 часов)</li>
                <li>✓ Любая платформа</li>
                <li>✓ Напитки включены</li>
                <li>✓ Персональное обслуживание</li>
              </ul>
              <Button variant="outline" className="w-full border-gamer-red text-gamer-red hover:bg-gamer-red hover:text-white">
                Выбрать
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
