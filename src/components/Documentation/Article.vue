<template>
  <v-content>
    <div>
      <div class="ma@-5">
        <Header/>
      </div>
      <v-parallax
              height="300"
              src="https://img-4.linternaute.com/ddokHpe0Hq8Q292MKRYlMNzdHig=/1240x/smart/4d3deecd97bb41c2b786288c95c23028/ccmcms-linternaute/10657574.jpg"
      ></v-parallax>
    </div>

    <h1 class="pa-10 pb-0 article-title">Panneaux EH2 : Qu'est ce qui change cette année ? </h1>
    <v-subheader class="px-10 article-date">Direction de Engie - 20/11/2020</v-subheader>
    <h2 class="my-5 px-10 article-subtitle">Photovolataïque</h2>
    <p class="px-10 article-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    <h2 class="my-5 px-10 article-subtitle">Savoir Faire</h2>
    <p class="px-10 article-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    <h2 class="my-5 px-10 article-subtitle">Une installation électrique particulière </h2>
    <p class="mb-10 px-10 article-text" >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

  </v-content>
</template>

<script>
  import Header from "../AppStructure/Header";

  export default {
    components: {
      Header,
    }

}
</script>

<style scoped>
  .article-title {
    text-align: left;
    margin-left: 10%;
    margin-right: 10%;
  }
  .article-date {
    margin-left: 10%;
    margin-right: 10%;
  }
  .article-subtitle {
    margin-left: 10%;
    margin-right: 10%;
    text-align: left;
  }
  .article-text {
    text-align: justify;
    margin-left: 10%;
    margin-right: 10%;
  }

</style>