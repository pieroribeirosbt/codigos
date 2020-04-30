aovivo:{
    nacional: { // SBT Nacional
        idsite: 207,
        idsitearea: 1562,
        idplaylist: 6307
    },
    reg_rj: { // Regional SBT Rio
        idsite: 351,
        idsitearea: 2395,
        idplaylist: 10596
    },
    reg_br: { // Regional SBT Brasília
        idsite: 158,
        idsitearea: 2497,
        idplaylist: 10764
    },
    reg_rs: { // Regional SBT RS
        idsite: 216,
        idsitearea: 2498,
        idplaylist: 10766
    },
    afi_vtv: { // Afiliada VTV
        idsite: 358,
        idsitearea: 2499,
        idplaylist: 10767
    },
    afi_tvallamanda: { // Afiliada TV Allamanda
        idsite: 352,
        idsitearea: 2313,
        idplaylist: 9194
    },
    afi_scc: { // Afiliada SBT Santa Catarina
        idsite: 353,
        idsitearea: 2538,
        idplaylist: 10830
    }
}



function getLocation(objConf) {
    navigator.geolocation.getCurrentPosition(function(location) {
        var lat = location.coords.latitude.toFixed(5);
        var lon = location.coords.longitude.toFixed(5);
        fetch(`${config.endpointGeolocation}/getLocation?lat=${lat}&lng=${lon}`)    
            .then(res => res.json())
            .then(location => {
                if(location.uf){        
                    let reg = location.regional;
                    switch(cleanString(reg).toUpperCase()){
                        case 'REDEVTV':                    
                            objConf = aovivo.afi_vtv;
                            console.log(`Request AOVIVO - REDE VTV`);
                        break;
                        case 'TVALLAMANDA':                    
                            objConf = aovivo.afi_tvallamanda;
                            console.log(`Request AOVIVO - TV ALLAMANDA`);
                        break;
                        case 'SBTSC':                    
                            objConf = aovivo.afi_scc;
                            console.log(`Request AOVIVO - SCC`);
                        break;
                        case 'SBTRIODEJANEIRO':                    
                            objConf = aovivo.reg_rj;
                            console.log(`Request AOVIVO - SBT RJ`);
                        break;
                        case 'SBTBRASILIA':                    
                            objConf = aovivo.reg_br;
                            console.log(`Request AOVIVO - SBT Brasilia`);
                        break;
                        case 'SBTPORTOALEGRE':            
                            objConf = aovivo.reg_rs;
                            console.log(`Request AOVIVO - SBT RS`);        
                        break;
                        default:
                            objConf = aovivo.nacional;
                            console.log(`Request AOVIVO - NACIONAL`);
                        break;
                    }
                }
            })
    })
  }