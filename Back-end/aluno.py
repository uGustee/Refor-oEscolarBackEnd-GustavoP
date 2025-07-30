from datetime import datetime

# Banco de dados de alunos
banco_alunos = {
    'alunos': []
}

class Aluno:
    def __init__(self, id_usuario, data_nascimento, serie_escolar, parentesco_pai):
        self.id_usuario = id_usuario  # Chave estrangeira para usuario_tb
        self.data_nascimento = data_nascimento
        self.serie_escolar = serie_escolar
        self.pontos_totais = 0
        self.nivel_jogo = 1
        self.parentesco_pai = parentesco_pai

def cadastrar_aluno(id_usuario, data_nascimento, serie_escolar, parentesco_pai):
    # Verifica se o usuário existe (comunicação entre os sistemas)
    usuario = buscar_usuario_por_id(id_usuario)  # Chama função do sistema de usuários
    if not usuario:
        return False, "Usuário não encontrado"
    
    # Verifica se já é aluno
    if any(aluno.id_usuario == id_usuario for aluno in banco_alunos['alunos']):
        return False, "Este usuário já é aluno"
    
    # Valida data
    try:
        datetime.strptime(data_nascimento, '%Y-%m-%d')
    except ValueError:
        return False, "Data inválida. Use AAAA-MM-DD"
    
    novo_aluno = Aluno(id_usuario, data_nascimento, serie_escolar, parentesco_pai)
    banco_alunos['alunos'].append(novo_aluno)
    return True, "Aluno cadastrado com sucesso"

def buscar_aluno_com_usuario(id_usuario):
    # Retorna tanto os dados do aluno quanto do usuário
    aluno = next((a for a in banco_alunos['alunos'] if a.id_usuario == id_usuario), None)
    if not aluno:
        return None, None
    
    usuario = buscar_usuario_por_id(id_usuario)
    return aluno, usuario
