const { Notification } = require( 'electron' );

// display files added notification
exports.filesAdded = ( size ) => {
    const notif = new Notification( {
        title: 'Files added',
        body: `${ size } file(s) has been successfully added.`
    } );

    notif.show();
};

// display files added notification
exports.filesDeleted = ( size ) => {
    const notif = new Notification( {
        title: 'Files deleted',
        body: `file(s) has been successfully deleted.`
    } );

    notif.show();
};
