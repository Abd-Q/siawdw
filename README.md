# ASIYÄ project

## Запуск

```bash
npm install
npm run dev
```

## Главное: где менять сайт

### 1. Размеры и расположение
`src/config/layoutConfig.ts`

Самые важные параметры:

```ts
catalog.cardMinWidth      // ширина карточек каталога
catalog.gridGap           // расстояние между карточками
productCard.minHeight     // высота карточки
productCard.mediaHeight   // высота картинки/товара внутри карточки
hero.imageWidth           // размер картинки в главном hero
hero.imageMaxHeight       // максимальная высота hero-картинки
giftSection.imageWidth    // размер картинки подарочных наборов
footer.logoWidth          // размер логотипа в футере
```

### 2. Картинки
`src/config/siteAssets.ts`

```ts
heroImage        // главная картинка справа в hero
catalogHeroImage // картинка сверху каталога
giftImage        // картинка блока подарочных наборов
newsImages       // картинки новостей
logo             // логотип
```

### 3. Ссылки
Общие ссылки:
`src/config/siteLinks.ts`

Ссылки товаров:
`src/data/products.ts`

У каждого товара есть:

```ts
kaspi: "...",
wb: "...",
ozon: "...",
```

### 4. Тексты на 3 языках

```text
src/i18n/ru.ts
src/i18n/kk.ts
src/i18n/en.ts
```

### 5. Стили конкретного блока
Стили лежат внутри файла компонента/страницы внизу:

```tsx
<style>{` ... `}</style>
```

Например:
- Header: `src/components/Header.tsx`
- Footer: `src/components/Footer.tsx`
- Hero: `src/components/HeroSection.tsx`
- Карточка товара: `src/components/ProductCard.tsx`
- Каталог: `src/pages/CatalogPage.tsx`
- Главная: `src/pages/HomePage.tsx`

Так ты можешь менять конкретный блок отдельно, без каши в одном CSS-файле.
