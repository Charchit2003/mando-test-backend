const companies = [
    'Apple Inc.',
    'Amazon',
    'Alphabet Inc.',
    'Adobe',
    'Airbnb',
    'Alibaba',
    'Spotify',
    'Square',
    'Samsung',
    'Slack Technologies',
    'Stripe',
    'Snapchat',
    'Snap Inc.',
    'Sony',
    'Salesforce',
    'ServiceNow',
    'Samsung Electronics',
    'Square Enix',
    'Spotify Technology'
  ];

exports.fetchCompaniesbyInitials = async(req, res) => {
    const query = req.query.query?.toLowerCase() || '';
    try {
        if (query.length === 0) {
            return res.json([]); // Return an empty array if no query is provided
          }
          
          // Filter companies based on query
          const filteredCompanies = companies.filter(company =>
            company.toLowerCase().startsWith(query)
          );
        
          res.status(200).json(filteredCompanies);
    } catch (error) {
        res.status(400).json(error);
    }

  };