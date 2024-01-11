class ResponseMessage {
  static getMessage(statusCode: number, customMessage = ''): string {
    const defaultMessages: { [key: number]: string } = {
      200: 'Tudo OK, solicitação bem sucedida :)',
      201: 'Requisição bem sucedida, um novo recurso foi criado com sucesso:',
      400: 'Algum erro de sintaxe esta impedindo que eu entenda esta requisição :(',
      404: 'Não foi possível encontrar o recurso solicitado, talvez esta lista esteja vazia',
      500: 'Ocorreu um erro ao realizar esta requisição',
    }

    const defaultMessage =
      defaultMessages[statusCode] || 'Status de resposta não reconhecido.'

    return customMessage ? `${customMessage}` : defaultMessage
  }
}

export default ResponseMessage
