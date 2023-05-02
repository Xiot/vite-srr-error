import express from "express";
import { test } from "./deps";

// Importing directly from the dependency will work
// import {test} from 'test-dep'

const app = express();

app.use((req, res, next) => {
  res.send(`success: ${test}`);
});

export const viteNodeApp = app;
