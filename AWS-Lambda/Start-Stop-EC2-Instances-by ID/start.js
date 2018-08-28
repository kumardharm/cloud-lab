var AWS = require('aws-sdk');

module.exports = (instanceId) => {
    var ec2 = new AWS.EC2();
    var params = {
      InstanceIds: [instanceId]
    };
	console.log(params);
    ec2.startInstances(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
};