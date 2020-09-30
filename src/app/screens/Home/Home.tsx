import React from 'react';

import { posts } from 'assets/images';

import { HomeContainer, HomeImagePosts, HomeButton } from './Home.styles';

const Home: React.FC = () => (
  <HomeContainer centralized>
    <HomeImagePosts src={posts} alt="Imagem posts" />
    <HomeButton label="Agendar post" element="link" variant="solid" size="large" color="primary" to="/agendar-post" />
  </HomeContainer>
);

export default Home;
