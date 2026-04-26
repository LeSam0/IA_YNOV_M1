export const destinations = [
  {
    id: 'paris-1889',
    title: 'Paris 1889',
    era: 'La Belle Epoque',
    price: '25 000 EUR',
    image: '/images/destinations/paris.png',
    description:
      'Assistez a l inauguration de la Tour Eiffel, dinez dans les salons prives de la haute societe et profitez d une immersion culturelle exclusive.',
  },
  {
    id: 'cretace',
    title: 'Cretace',
    era: '-65 Millions d annees',
    price: '45 000 EUR',
    image: '/images/destinations/cretace.png',
    description:
      'Partez en expedition securisee a bord de capsules blindees pour observer la megafaune prehistorique et des paysages originels extraordinaires.',
  },
  {
    id: 'florence-1504',
    title: 'Florence 1504',
    era: 'La Renaissance',
    price: '30 000 EUR',
    image: '/images/destinations/florence.png',
    description:
      'Acces prive aux ateliers des maitres de la Renaissance, rencontres d erudits et sejour raffine au coeur de la ville la plus artistique d Europe.',
  },
]

export const getDestinationById = (id) =>
  destinations.find((destination) => destination.id === id)
