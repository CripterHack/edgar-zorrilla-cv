<template>
  <div class="page-wrapper">
    <div class="page" id="PageCV">
      <div class="page-inner">
        <div class="resume">
          <div class="banner">
            <div class="banner__container">
              <div class="banner__fullname">{{ person.name.first }} {{ person.name.middle }} {{ person.name.last }}</div>
              <div class="banner__position">{{ person.position }}</div>
              <div class="banner__position--sub">{{ person.subhead }}</div>
            </div>
            <img class="picture"/>
            <div class="section">
                <div class="section-content section-content--plain">
                  <div class="section-link">
                    <i class="section-link__icon material-icons">home</i>{{ person.contact.street }}
                  </div>
                  <a class="section-link link"
                    :href="contactLinks.whatsapp" target="_blank" rel="noopener noreferrer">
                    <i class="section-link__icon fa fa-whatsapp"></i>{{ person.contact.phone }}
                  </a>
                  <a v-if="person.contact.github"
                    class="section-link link link--github"
                    :href="contactLinks.github">
                    <i class="section-link__icon fa fa-github"></i>GitHub
                  </a>
                  <a v-if="person.contact.linkedin"
                    class="section-link link link--linkedin"
                    :href="contactLinks.linkedin">
                    <i class="section-link__icon fa fa-linkedin-square"></i>LinkedIn
                  </a>
                  <a v-if="person.contact.website"
                    class="section-link link link--cv"
                    :href="person.contact.website">
                    {{ person.contact.urlcv }}
                  </a>
                  <a v-if="person.contact.medium"
                    class="section-link link"
                    :href="contactLinks.medium">
                    <i class="section-link__icon fa fa-medium"></i>{{ person.contact.medium }}
                  </a>
                </div>

                <div v-if="person.birth" class="banner__info">{{person.birth.yo}} {{ lang.years }} <span>{{person.birth.date}}</span></div>

                <div class="section-content section-content--plain">
                  <a class="section-link link"
                    :href="contactLinks.email">
                    {{ person.contact.email }}
                  </a>
                  <a class="section-link link"
                    :href="contactLinks.emailb">
                    {{ person.contact.emailb }}
                  </a>
                  <div class="section-link rfc">
                    {{ person.contact.rfc }}
                  </div>
                </div>
              </div>
          </div>
          <div class="content">
            <div class="content__left">
              <div
                v-if="person.skills"
                class="section">

                <div class="section-content-grid">
                  <a
                    v-for="(skill, index) in person.skills"
                    class="grid-item"
                    :key="index"
                    :class="{ link: skill.url !== undefined}"
                    :href="skill.url"
                    :title="skill.level+'%'">
                    <span class="squarred-grid-item">
                      {{ skill.name }}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div class="content__right">
              <div class="section">
                <div class="company section-content">
                  <div v-for="(experience, index) in person.experience"
                    :key="index"
                    class="section-content__item"
                    :class="{ link: experience.website !== undefined}">

                    <a class="section-content-logo" :href="experience.website" target="_blank" rel="noopener noreferrer">
                      <img :src="experience.logo" :alt="experience.company"/>
                    </a>
                    
                    <div class="section-content-wrapper">
                      <div class="section-content-inline">
                        <a class="section-content__header" :href="experience.website" target="_blank" rel="noopener noreferrer">{{ experience.company }}</a>
                        <div class="section-content__text">{{ experience.timeperiod }}</div>
                      </div>
                      <span class="section-content__subheader">
                        {{ experience.position }}
                        <span class="section-content__plain">{{ experience.location }}</span>
                      </span>
                      <span class="section-content__text--light">{{ experience.description }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="section">
                <div class="school section-content">
                  <a
                    v-for="(education, index) in person.education"
                    class="section-content__item"
                    :key="index"
                    :class="{ link: education.website !== undefined}"
                    :href="education.website">

                    <div class="section-content-logo">
                      <img :src="education.logo" :alt="education.school"/>
                    </div>

                    <div class="section-content-wrapper">
                      <span class="section-content__header"> {{ education.school }} </span>
                      <span class="section-content__subheader">{{ education.degree }}</span>
                      <span class="section-content__text"> {{ education.timeperiod }} </span>
                      <span class="section-content__text--light"> {{ education.description }} </span>
                    </div>
                  </a>
                </div>
              </div>

              <div
                v-if="person.projects"
                class="section">
                <div class="section-headline">
                  <i class="section-headline__icon material-icons">code</i>{{ lang.projects }}
                </div>

                <div class="section-content-grid">
                  <a v-for="(project, index) in person.projects" :key="index"
                    class="section-content__item-grid"
                    :class="{ link: project.url !== undefined}"
                    :href="project.url">
                    <span class="section-content__header"> {{ project.name }} </span>
                    <span class="section-content__subheader">{{ project.platform }}</span>
                    <span class="section-content__text"> {{ project.description }} </span>
                  </a>
                </div>
              </div>

              <div
                v-if="person.contributions"
                class="section">
                <div class="section-headline">
                  <i class="section-headline__icon fa fa-heart"></i>{{lang.contributions}}
                </div>

                <div class="section-content-grid">
                  <a v-for="(contribution, index) in person.contributions"
                    class="section-content__item-grid"
                    :key="index"
                    :class="{ link: contribution.url !== undefined}"
                    :href="contribution.url">
                    <span class="section-content__header"> {{ contribution.name }} </span>
                    <span class="section-content__text"> {{ contribution.description }} </span>
                    <span class="section-content__text--light" style="word-break: break-all;">
                      {{ contribution.url }}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';
const name = 'PageCV';
export default Vue.component(name, getVueOptions(name));
</script>
<style lang="less" scoped>
@accent-color: #535353;
@banner-color: transparent;
@banner-height: 260px;
@picture-size: 195px;
@base-padding: 25px;
@left-column-width: 225px;

.link {
  color: inherit;
  cursor: pointer;
  text-decoration-line: none;
  &:visited{color:inherit}
}

.resume {
  position: relative;
  font-family:'Aileron', sans-serif;
  font-size: 0.9em;
}

.picture {
  position: relative;
  height: @picture-size;
  width: @picture-size;
  border-radius: 50%;
  border: 12px solid @accent-color;
  content: url('../../resume/id.jpg');
  filter: grayscale(1) contrast(1.5);
  z-index: 2;
  margin: -15px 20px 0 -40px;
}

.banner {
  width: calc(100% - @base-padding * 2);
  height: @banner-height;
  padding: 10px 25px 6px;
  background-color: @banner-color;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #535353;

  &__fullname{
    font-size: 98px;
    letter-spacing: -5px;
    word-break: break-word;
    width: 100%;
    line-height: 0.87em;
    margin: 20px auto 0 0;
    transform: scaleX(0.95) translate(-3%,0);
    font-family: 'Big John', sans-serif;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgb(255 255 255 / 10%) 3px 3px 3px;
    background-color: #535353;
    padding: 8px 0 6px;
  }
  &__position{
    font-size:36px;
    font-family: 'Big John', sans-serif;
    letter-spacing: 0.4px;
  }
  &__position--sub{
    font-size: 16px;
    letter-spacing: -1px;
    font-family: 'Big John', sans-serif;
    margin-right: -60px;
  }

  .section {
    width: 220px;
    margin: -5px 0 0 !important;
  }
  .section-content--plain div, .section-content--plain a, .banner__info, .banner__info span {
    font-family: 'Big John', sans-serif;
  }
  .banner__info, .banner__info span {
    font-size: 16px;
    letter-spacing: -1px;
    color: #313131 !important
  }
  .banner__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  a.link[href*="@izignamx.com"] {
    letter-spacing: 1.05px;
  }
  a.link[href*="edgar.cripter"] {
    letter-spacing: -1.2px;
  }
  .rfc {
    letter-spacing: 1.65px;
  }

  .link--github {
    float: left;
  }
  .link--linkedin {
    float: right;
  }
  .link--cv {
    clear: both;
    letter-spacing: 1.85px;
  }
}


.content {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;

  &__left,
  &__right {
    height: 100%;
    padding: 6px 25px 25px;
  }

  &__left {
    width: @left-column-width;
    color: @accent-color;
    padding: 0;
    margin: -10px 20px 0 0;

    .section-headline {
      color: @accent-color;
    }
  }

  &__right{
    flex:1;

    &>.section {
      &:nth-of-type(1) {
        margin: 15px 0 0;
      }
      &:nth-of-type(2) {
        margin: 25px 0 0;
      }
    }
  }

  .section-content-grid>.grid-item:nth-child(odd) {
    background-color: @accent-color;

    .squarred-grid-item {
      border: 1px solid @accent-color;
      color: #fff;
    }
  }
}

.section {
  margin: 15px 0 11px;
}

.section-link,
.section-headline {
  display: flex !important;
  align-items: center;
  color: @accent-color;
  display: inline-block;
  font-size: 1.2em;
  margin: 8px 0;

  &__icon {
    margin-right: 8px;
    font-size: 1.4em;
  }
}

.section-link {
  font-size: 1.1em;
  color: #313131 !important;
  white-space: nowrap;

  &__icon{color:#313131}
}

.section-content {
  margin-top: 5px;
  padding-left: 8px;
  font-size: 14px;

  &__item {
    display: inline-flex;
    margin-bottom: 20px;
  }

  &-inline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__header {
    display: block;
    font-weight: 500;
    font-family: 'Big John', sans-serif;
    text-decoration: none;
    color: #535353;
  }

  &__subheader {
    display: block;
    font-weight: 400;
  }

  &__plain,
  &__text {
    display: block;
    font-size: 12px;
    display: flex;
    align-items: center;
    max-width: 235px;
    text-align: right;

    &--light{font-size:12px}
  }

  &__plain {
    display: inline;
    font-weight: 300;
  }

  &__item-grid {
    flex: 1 1 0;
    margin-bottom: 5px;
    padding-right: 5px;
  }

  &--plain{padding:0}

  .section-content-logo {
    display: inline-flex;
    margin-right: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &.company {
    .section-content {
      &-logo {
        margin-top: 8px;
        min-width: 60px;
        width: 60px;
        height: 60px;
      }
      &__header {
        font-size: 21px;
        margin-bottom: 5px;
      }
    }
  }
  &.school {
    .section-content {
      &-logo {
        min-width: 50px;
        width: 50px;
        height: 50px;
      }
      &__header {
        font-size: 14px;
        margin-bottom: 3px;
      }
      &__text {
        &--light {
          max-width: 270px;
          display: block;
        }
      }
    }
  }
}

.section-content-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 5px;
}

.grid-item{
  background-color: #fff;
  width: 100%;
  padding: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 5px;
}
.squarred-grid-item {
  display: block;
  border: 1px solid transparent;
  color: @accent-color;
  padding: 10px 3px 0;
  width: 100%;
  font-size: 42px;
  font-family: 'Big John', sans-serif;
  line-height: 41px;
  max-width: 100%;
  overflow: hidden;
  letter-spacing: -3px;
}
</style>
<style scoped>
.page-inner{
  height: 100%;
  width: 100%;
}
.page-wrapper {
  overflow-x: hidden;
  background: #f5f5f5;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}

.resume {
  height: 100%;
  width: 100%;
}

.page {
  background: white;
  position: relative;
  width: 21cm;
  height: 29.68cm;
  min-width: 21cm;
  min-height: 29.68cm;
  max-width: 21cm;
  max-height: 29.68cm;
  display: block;
  page-break-after: auto;
  overflow: hidden;
}
@media not print {
  .page {
    max-width: 1000px;
    width:90%;
    height:auto;
    margin: 0 auto;
    position: relative;
    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.1);
    -moz-box-shadow: 0 2px 4px rgba(0,0,0,.1);
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
  }
}
</style>
