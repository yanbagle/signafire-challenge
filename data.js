var faker = require('faker');

module.exports = function() {
    const data = { messages: [] };

    for (var i = 0; i < 20; i++) {
      data.messages.push({
        id: faker.random.number(),
        handle: faker.internet.userName(),
        avatar: faker.internet.avatar(),
        timestamp: faker.date.past(),
        source: 'Twitter',
        content: faker.lorem.sentences(),
        score: Math.floor((Math.random() * 100) + 1),
        isStarred: faker.random.boolean()
      });
    }

    return data;
}
