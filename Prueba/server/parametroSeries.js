if (Series.find().count() === 0) {
for (i = 1; i <= 30; i++) { 
	  Series.insert({
	    id: "sensor" + i,
	    axisColor: "#FF6600",
	    axisThickness: 2,
	    gridAlpha: 0,
	    axisAlpha: 1,
	    position: "left",
	    maximum: 100,
	    minimum: 32,
	    title: "Temp (F)"
	  });
  }
}
