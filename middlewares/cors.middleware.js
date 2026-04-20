import express from 'express';
import cors from 'cors';


const corsOptions = {
  origin: ['http://localhost:4200'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Si usas cookies o headers de autorización
  maxAge: 86400 // Cachea la respuesta preflight por 24 horas
};

export const corsMiddleware = cors(corsOptions);




