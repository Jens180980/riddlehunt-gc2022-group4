module.exports = data = {
  category: [
    {
      name: "Southeast Sulawesi",
      description:
        "arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas",
      icon: "est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse",
    },
    {
      name: "Swiętokrzyskie",
      description:
        "parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec",
      icon: "dictum mi, ac mattis velit justo nec ante. Maecenas mi",
    },
    {
      name: "Valle del Cauca",
      description:
        "massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec",
      icon: "elit erat vitae risus. Duis a mi fringilla mi lacinia",
    },
  ],

  place: [
    {
      name: "Canada",
      description:
        "arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas",
      latitude: "-78.8829437952",
      longitude: "-52.0581536768",
      image: "arcu iaculis enim, sit amet ornare lectus",
      categoryId: 1,
    },
    {
      name: "Russian Federation",
      description:
        "parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec",
      latitude: "7.9360386048",
      longitude: "93.4091744256",
      image: "a mi fringilla",
      categoryId: 2,
    },
    {
      name: "Chile",
      description:
        "massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec",
      latitude: "-13.7421817856",
      longitude: "25.2004496384",
      image: "faucibus ut,",
      categoryId: 1,
    },
    {
      name: "Belgium",
      description:
        "eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis",
      latitude: "78.8099332096",
      longitude: "75.04996352",
      image: "Donec elementum, lorem ut aliquam",
      categoryId: 2,
    },
    {
      name: "Germany",
      description:
        "aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque",
      latitude: "19.1230565376",
      longitude: "-179.90489344",
      image: "feugiat. Sed",
      categoryId: 1,
    },
  ],

  route: [
    {
      name: "viverra. Donec tempus, lorem",
      time_in_hours: 3,
      distance_in_km: 5,
    },
    {
      name: "egestas a, dui. Cras pellentesque. Sed",
      time_in_hours: 0,
      distance_in_km: 6,
    },
  ],

  route_places: [
    { position_in_route: 1, placeId: 1, routeId: 1 },
    { position_in_route: 2, placeId: 2, routeId: 1 },
    { position_in_route: 3, placeId: 4, routeId: 1 },
    { position_in_route: 2, placeId: 3, routeId: 2 },
    { position_in_route: 2, placeId: 2, routeId: 2 },
    { position_in_route: 2, placeId: 4, routeId: 2 },
    { position_in_route: 2, placeId: 1, routeId: 2 },
  ],
};
