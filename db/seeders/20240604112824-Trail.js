/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trails', [
      {
        title: 'Бульварное кольцо',
        average_rating: null,
        image_link: 'https://img4.teletype.in/files/37/b9/37b9ff5e-833e-4129-bfb9-2b6ebea88879.jpeg',
        location: 'Москва',
        distance: 6.8,
        trail_data: null,
        trail_center: null,
        trail_zoom: null,
        user_id: 1,
      },
      {
        title: 'ВДНХ и Ботанический Сад',
        average_rating: null,
        image_link: 'https://www.fiesta.ru/uploads/slider_image/image/203833/v880_ot-vdnx-do-ostankino.jpg',
        location: 'Москва',
        distance: 15,
        trail_data: null,
        trail_center: null,
        trail_zoom: null,
        user_id: 2,
      },
      {
        title: 'Битцевский Парк',
        average_rating: null,
        image_link: 'https://cdn.pacer.cc/route/screenshot/osm_way_303650309.png',
        location: 'Москва',
        distance: 1.91,
        trail_data: null,
        trail_center: null,
        trail_zoom: null,
        user_id: 3,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trails', null, {});
  },
 };
