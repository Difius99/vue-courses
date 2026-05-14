<script setup lang="ts">
import Telegram from "../../icons/Telegram.vue";
import VK from "../../icons/VK.vue";
import YouTube from "../../icons/YouTube.vue";
import {
  Container,
  CopyrightText,
  CopyrightTextWrapper,
  FooterWrapper,
  LeftSection,
  RightSection,
  SocialsItem,
  SocialsList,
} from "./styled";
</script>
<template>
  <Container>
    <FooterWrapper>
      <LeftSection>
        <CopyrightTextWrapper>
          <CopyrightText>Вакансии</CopyrightText>
          <CopyrightText>Техническая поддержка</CopyrightText>
        </CopyrightTextWrapper>

        <CopyrightText variant="second">© 2023 ФГБОУ ВО ТУСУР</CopyrightText>
      </LeftSection>

      <RightSection>
        <CopyrightText>Мы в социальных сетях</CopyrightText>
        <SocialsList>
          <SocialsItem><YouTube /></SocialsItem>
          <SocialsItem><Telegram /></SocialsItem>
          <SocialsItem><VK /></SocialsItem>
        </SocialsList>
      </RightSection>
    </FooterWrapper>
  </Container>
</template>
