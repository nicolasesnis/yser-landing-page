
 const cloud_storage = document.getElementById("cloud_storage");
 const cloud_storage2 = document.getElementById("cloud_storage2");
 const interface_admin = document.getElementById("interface_admin");
 const interface_admin2 = document.getElementById("interface_admin2");
 const confiance_et_transparence = document.getElementById("confiance_et_transparence");
 const confiance_et_transparence2 = document.getElementById("confiance_et_transparence2");
 const portfolio = document.getElementById("portfolio")


 const insert_cloud = (event) => {
  portfolio.innerHTML =`<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design" style="text-align: center;">
  <div class="portfolio-item" style="padding-top: 13px">
    <div class="shot-item" style="margin: auto">
      <img style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%" src="http://www.ingerop.fr/sites/default/files/imagenes_de_proyectos/almerys_facade_1.jpg" alt="" />
      <a  class="overlay lightbox filter" id="cloud_storage2"  data-filter=".design">
        <i class="fas fa-search-plus item-icon"></i>
      </a>
    </div>
    <p style="padding: 10px;">Notre data-centre à Clermont Ferrand</p>
  </div>
</div>
<div style="padding:25px" class="col-sm-6 col-md-8 col-lg-8 col-xl-8 mix design">
  <div class="portfolio-item">
    <div class="shot-item">
      <p style="text-align: justify;"><span style="font-size:18px">Répondez aux demandes des particuliers un espace de stockage numérique au sein du data center hautement sécurisé de notre partenaire, le groupe be-ys. Le traitement de données personnelles et sensibles fait l'objet d'une législation stricte et ne doit pas être pris à la légère. Nous avons construit avec notre partenaire be-ys, expert dans le traitement, la collecte et le stockage de données sensibles, l'espace le plus sécurisé possible pour permettre le partage de ces données.  Nous bénéficions de l'expertise reconnue des équipes back et front office de be-ys, disponibles en 24/7/365 dans un environnement hautement sécurisé (HaDS, RGPD, BCR, ISO 27001, ...).</span></p>
    </div>
  </div>
</div>`
 }

 const insert_interface = (event) => {
  portfolio.innerHTML = `<div style="padding:25px" class="col-sm-6 col-md-8 col-lg-8 col-xl-8 mix development">
  <div class="portfolio-item">
    <div class="shot-item">
      <p style="text-align: justify;"><span style="font-size:18px">Les entreprises ont accès à une interface qui permet de répondre aux demandes utilisateur d’accès, d’oubli, de rectification ou de portabilité sur des données. Le Data Protection Officer de l'entreprise reçoit des notifications de yser et est invité à répondre aux demandes à travers notre plateforme privée et sécurisée. De plus, l'interface offre un suivi du traitement des requêtes : historique et horodatage de leur traitement, depuis la réception de la demande jusqu’à la réponse. Enfin, nous nous occupons de vérifier une première fois l'identité des demandeurs, et transmettons à l'entreprise les documents d'identité conjointement à la requête. Nous avons cherché à réduire au maximum la charge de travail du DPO.</span></p>
    </div>
  </div>
</div>
<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
  <div class="portfolio-item" style="padding-top:5%;">
    <div class="shot-item">
      <div style="display:flex;align-items:center">
        <i class="fas fa-4x fa-tachometer-alt"></i>
        <div style="width:20px;"></div>
        <p><span style="font-size:20px;">Diminution du temps de traitement des demandes</span></p>
      </div>
      <br>
      <div style="display:flex;align-items:center">
        <i class="fas fa-4x fa-tasks"></i>
        <div style="width:20px;"></div>
        <p><span style="font-size:20px;">Suivi et historique complet des requêtes</span></p>
      </div>
      <br>
      <div style="display:flex;align-items:center">
        <i class="fas fa-4x fa-id-card"></i>
        <div style="width:20px;"></div>
        <p><span style="font-size:20px;">Vérification préalable de l'identité des demandeurs</span></p>
      </div>
      <br>
    </div>
  </div>
</div>`
 }

 const insert_confiance = (event) => {
  portfolio.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print" style="text-align: center;" >
  <div class="portfolio-item" style="padding-top: 12px">
    <div class="shot-item" style="margin: auto">
      <img style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%" src="https://www.genious-interactive.com/wp-content/uploads/2017/08/protection-donnees-9-mois-pour-etre-conforme-RGPD.png" alt="" />
      <a  class="overlay lightbox filter"id="confiance_et_transparence2" data-filter=".print">
        <i class="fas fa-search-plus item-icon filter" ></i>
      </a>
    </div>
    <p style="padding: 10px;">yser vous aide à être GDPR compliant</p>
  </div>
</div>
<div style="padding:25px" class="col-sm-6 col-md-8 col-lg-8 col-xl-8 mix print">
  <div class="portfolio-item">
    <div class="shot-item">
      <div class="shot-item">
      <p style="text-align: justify;"><span style="font-size:18px">En optant pour notre plateforme, vous faites le pari de la transparence et de la confiance. Vous mettez à disposition de vos utilisateurs un canal d'échange qui leur est dédié, et au travers duquel ils peuvent intéragir avec vous. Par ailleurs, vous démontrez votre bonne foi auprès des autorités (CNIL et Commission Européenne), et vous adoptez un principe de responsabilité. Vous vous mettez en conformité avec certaines des nouvelles obligations issues du RGPD, tout en créant un lien de confiance bénéfique avec vos usagers.</span></p>
    </div>
    </div>
  </div>
</div>`
 }

 cloud_storage.addEventListener("click", insert_cloud)
 cloud_storage2.addEventListener("click", insert_cloud)
 interface_admin.addEventListener("click", insert_interface)
 interface_admin2.addEventListener("click", insert_interface)
 confiance_et_transparence.addEventListener("click", insert_confiance)
 confiance_et_transparence2.addEventListener("click", insert_confiance)


