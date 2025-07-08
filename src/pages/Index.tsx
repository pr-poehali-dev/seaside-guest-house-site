import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-ocean-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Waves" className="h-8 w-8 text-ocean-500" />
              <h1 className="text-2xl font-montserrat font-bold text-ocean-600">
                Три Кита
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#main"
                className="text-gray-600 hover:text-ocean-500 transition-colors"
              >
                Главная
              </a>
              <a
                href="#rooms"
                className="text-gray-600 hover:text-ocean-500 transition-colors"
              >
                Номера
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-ocean-500 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-ocean-500 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-ocean-500 hover:bg-ocean-600">
              Забронировать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="main"
        className="relative bg-gradient-to-r from-ocean-500 to-ocean-600 text-white"
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-montserrat font-bold mb-6">
                Гостевой дом
                <br />
                <span className="text-ocean-100">"Три Кита"</span>
              </h1>
              <p className="text-xl font-opensans mb-8 text-ocean-100">
                Комфортабельные номера со всеми удобствами в центральном районе
                поселка. Всего 400 метров до моря по тенистой кипарисовой аллее.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-ocean-600 hover:bg-ocean-50"
                >
                  Забронировать номер
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ocean-600"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/2c3a9704-e877-4def-83b5-5a65c21e4226.jpg"
                alt="Гостевой дом Три Кита"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-ocean-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Waves" className="h-8 w-8 text-ocean-500" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                400м до моря
              </h3>
              <p className="text-gray-600 font-opensans">
                По тенистой кипарисовой аллее
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-ocean-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Bed" className="h-8 w-8 text-ocean-500" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Комфортные номера
              </h3>
              <p className="text-gray-600 font-opensans">
                2-х, 3-х, 4-х местные со всеми удобствами
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-ocean-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Car" className="h-8 w-8 text-ocean-500" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Парковка
              </h3>
              <p className="text-gray-600 font-opensans">
                Бесплатная стоянка для автомобилей
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="bg-ocean-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="MapPin" className="h-8 w-8 text-ocean-500" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Центр поселка
              </h3>
              <p className="text-gray-600 font-opensans">
                Удобное расположение рядом с инфраструктурой
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-ocean-600 mb-4">
              Наши номера
            </h2>
            <p className="text-xl text-gray-600 font-opensans">
              Комфортабельные номера со всеми удобствами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-scale-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/img/5aa96165-1224-4697-98a6-a1ebfe9c5c2b.jpg"
                  alt="2-местный номер"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="font-montserrat text-xl">
                  2-местный номер
                </CardTitle>
                <CardDescription className="font-opensans">
                  Уютный номер для пары
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 font-opensans">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Туалет и душ
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Телевизор
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Кондиционер
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-ocean-500 hover:bg-ocean-600">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/img/5aa96165-1224-4697-98a6-a1ebfe9c5c2b.jpg"
                  alt="3-местный номер"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="font-montserrat text-xl">
                  3-местный номер
                </CardTitle>
                <CardDescription className="font-opensans">
                  Идеально для небольшой компании
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 font-opensans">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Туалет и душ
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Телевизор
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Кондиционер
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-ocean-500 hover:bg-ocean-600">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scale-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/img/5aa96165-1224-4697-98a6-a1ebfe9c5c2b.jpg"
                  alt="4-местный номер"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="font-montserrat text-xl">
                  4-местный номер
                </CardTitle>
                <CardDescription className="font-opensans">
                  Просторный номер для семьи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 font-opensans">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Туалет и душ
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Телевизор
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Кондиционер
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-ocean-500 hover:bg-ocean-600">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-ocean-600 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 font-opensans">
              Всё для комфортного отдыха
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <div className="bg-ocean-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Waves" className="h-8 w-8 text-ocean-500" />
                </div>
                <CardTitle className="font-montserrat">Бассейн</CardTitle>
                <CardDescription className="font-opensans">
                  Освежающий бассейн для отдыха
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <div className="bg-ocean-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Utensils" className="h-8 w-8 text-ocean-500" />
                </div>
                <CardTitle className="font-montserrat">Питание</CardTitle>
                <CardDescription className="font-opensans">
                  2-3 разовое питание за дополнительную плату (500-700 руб)
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <div className="bg-ocean-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Flame" className="h-8 w-8 text-ocean-500" />
                </div>
                <CardTitle className="font-montserrat">
                  Беседки с мангалом
                </CardTitle>
                <CardDescription className="font-opensans">
                  Уютные места для барбекю
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <div className="bg-ocean-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="ChefHat" className="h-8 w-8 text-ocean-500" />
                </div>
                <CardTitle className="font-montserrat">Кухня</CardTitle>
                <CardDescription className="font-opensans">
                  Два кухонных помещения с холодильниками и плитами
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <div className="bg-ocean-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Car" className="h-8 w-8 text-ocean-500" />
                </div>
                <CardTitle className="font-montserrat">Парковка</CardTitle>
                <CardDescription className="font-opensans">
                  Бесплатная стоянка для автомобилей
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <div className="bg-ocean-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="TreePine" className="h-8 w-8 text-ocean-500" />
                </div>
                <CardTitle className="font-montserrat">
                  Кипарисовая аллея
                </CardTitle>
                <CardDescription className="font-opensans">
                  Тенистая дорожка к морю
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-ocean-600 mb-4">
              Фотогалерея
            </h2>
            <p className="text-xl text-gray-600 font-opensans">
              Наш гостевой дом в деталях
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="animate-scale-in">
              <img
                src="/img/2c3a9704-e877-4def-83b5-5a65c21e4226.jpg"
                alt="Гостевой дом"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/5aa96165-1224-4697-98a6-a1ebfe9c5c2b.jpg"
                alt="Номер"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/ebef6eb1-cd35-4f05-a7ca-39018ef3b7b2.jpg"
                alt="Кипарисовая аллея"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-ocean-600 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 font-opensans">
              Свяжитесь с нами для бронирования
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-ocean-100 rounded-full p-3 flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6 text-ocean-500" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">
                      Адрес
                    </h3>
                    <p className="text-gray-600 font-opensans">
                      Центральный район поселка, 400м до моря
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-ocean-100 rounded-full p-3 flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6 text-ocean-500" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">
                      Телефон
                    </h3>
                    <p className="text-gray-600 font-opensans">
                      +7 (XXX) XXX-XX-XX
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-ocean-100 rounded-full p-3 flex items-center justify-center">
                    <Icon name="Clock" className="h-6 w-6 text-ocean-500" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg">
                      Время работы
                    </h3>
                    <p className="text-gray-600 font-opensans">Круглосуточно</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat">
                    Забронировать номер
                  </CardTitle>
                  <CardDescription className="font-opensans">
                    Заполните форму и мы свяжемся с вами
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Имя
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500"
                        placeholder="+7 (XXX) XXX-XX-XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Заезд
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Выезд
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      placeholder="Дополнительная информация"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-ocean-500 hover:bg-ocean-600">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Waves" className="h-6 w-6" />
              <span className="text-xl font-montserrat font-bold">
                Гостевой дом "Три Кита"
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="font-opensans">© 2024 Гостевой дом "Три Кита"</p>
              <p className="text-ocean-100 font-opensans">
                Ваш комфортный отдых у моря
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
