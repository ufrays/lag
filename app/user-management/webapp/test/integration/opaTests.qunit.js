sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'lag/usermanagement/test/integration/FirstJourney',
		'lag/usermanagement/test/integration/pages/UserEntityList',
		'lag/usermanagement/test/integration/pages/UserEntityObjectPage',
		'lag/usermanagement/test/integration/pages/UserParticipantActivityEntityObjectPage'
    ],
    function(JourneyRunner, opaJourney, UserEntityList, UserEntityObjectPage, UserParticipantActivityEntityObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('lag/usermanagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUserEntityList: UserEntityList,
					onTheUserEntityObjectPage: UserEntityObjectPage,
					onTheUserParticipantActivityEntityObjectPage: UserParticipantActivityEntityObjectPage
                }
            },
            opaJourney.run
        );
    }
);