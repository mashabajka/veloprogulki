/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trails', [
      {
        title: 'Бульварное кольцо',
        score: 7,
        image_link: 'https://img4.teletype.in/files/37/b9/37b9ff5e-833e-4129-bfb9-2b6ebea88879.jpeg',
        location: 'Москва',
        distance: 6.8,
        start_lat: '55.744684',
        start_lon: '37.602190',
        custom_points: null,
        finish_lat: '55.751059',
        finish_lon: '37.644845',
        user_id: 1,
      },
      {
        title: 'ВДНХ и Ботанический Сад',
        score: 9,
        image_link: 'https://www.fiesta.ru/uploads/slider_image/image/203833/v880_ot-vdnx-do-ostankino.jpg',
        location: 'Москва',
        distance: 15,
        start_lat: '55.824537',
        start_lon: '37.616185',
        custom_points: null,
        finish_lat: '55.822358',
        finish_lon: '37.641966',
        user_id: 2,
      },
      {
        title: 'Битцевский Парк',
        score: 5,
        image_link: 'https://cdn.pacer.cc/route/screenshot/osm_way_303650309.png',
        location: 'Москва',
        distance: 1.91,
        start_lat: '55.613812',
        start_lon: '37.553871',
        custom_points: null,
        finish_lat: '55.621213',
        finish_lon: '37.575462',
        user_id: 3,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trails', null, {});
  },
 };
