import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { PublicLayout } from "../layouts/PublicLayout";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { Involucrate } from "../pages/Involucrate";
import { Contact } from "../pages/Contact";
import { Blog } from "../pages/Blog/Blog";
import { PageBlog } from "../pages/PageBlog/PageBlog";
import { DonationForm } from "../pages/DonationForm";

export default function PublicRoutes() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(PublicLayout, Home)} />
      <Route
        path="/quienes-somos"
        element={loadLayout(PublicLayout, AboutUs)}
      />
      <Route
        path="/involucrate"
        element={loadLayout(PublicLayout, Involucrate)}
      />
      <Route path="/contactanos" element={loadLayout(PublicLayout, Contact)} />
      <Route path="/blog" element={loadLayout(PublicLayout, Blog)} />
      <Route
        path="/blog/historia"
        element={loadLayout(PublicLayout, PageBlog)}
      />
      <Route path="/donar" element={loadLayout(PublicLayout, DonationForm)} />
    </Routes>
  );
}
