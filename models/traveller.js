const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance;
  }, 0)
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportTypes = this.journeys.map((journey) => journey.transport)
  let uniqueTransport = transportTypes.filter((element, index) => {
    return transportTypes.indexOf(element) === index;
  })
  return uniqueTransport;
};


module.exports = Traveller;
