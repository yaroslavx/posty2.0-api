import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 8 символов').isLength({
    min: 8,
  }),
];

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 8 символов').isLength({
    min: 8,
  }),
  body('name', 'Укажите Имя').isLength({ min: 1 }),
  body('avatarUrl').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Введите заголовок поста').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст поста').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тега').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];
