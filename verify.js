exports.handler = async (event) => {

  const { code } = JSON.parse(event.body);

  if (code === process.env.SECRET_CODE) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: false })
  };
};
