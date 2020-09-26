import React from 'react';

import { posts } from 'assets/images';

import { BasePage } from 'app/components';

import { HomeImagePosts, HomeButton } from './Home.styles';

const Home: React.FC = () => (
  <BasePage centralized>
    <HomeImagePosts src={posts} alt="Imagem posts" />
    <HomeButton label="Agendar post" element="link" variant="solid" size="large" color="primary" to="/agendar-post" />
  </BasePage>
);

export default Home;
