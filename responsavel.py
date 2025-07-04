from datetime import datetime

# Banco de dados de responsáveis (separado mas integrado)
banco_responsaveis = {
    'responsaveis': [],
    'ultimo_id': 0
}

class Responsavel:
    def __init__(self, id_usuario, telefone, email):
        global banco_responsaveis
        banco_responsaveis['ultimo_id'] += 1
        self.id_responsavel = banco_responsaveis['ultimo_id']
        self.id_usuario = id_usuario  # Chave estrangeira para usuario_tb
        self.telefone = telefone
        self.email = email
        self.data_cadastro = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

def cadastrar_responsavel(id_usuario, telefone, email):
    """Cadastra um novo responsável, verificando antes se o usuário existe"""
    
    # Verifica se o usuário existe (integração com usuario_tb)
    usuario = buscar_usuario_por_id(id_usuario)  # Função do sistema de usuários
    if not usuario:
        return False, "Usuário não encontrado"
    
    # Verifica se já é responsável
    if any(r.id_usuario == id_usuario for r in banco_responsaveis['responsaveis']):
        return False, "Este usuário já é responsável"
    
    # Validação do telefone
    if not telefone.isdigit() or len(telefone) != 11:
        return False, "Telefone inválido (use 11 dígitos)"
    
    novo_responsavel = Responsavel(id_usuario, telefone, email)
    banco_responsaveis['responsaveis'].append(novo_responsavel)
    return True, "Responsável cadastrado com sucesso"

def buscar_responsavel_por_usuario(id_usuario):
    """Retorna o responsável associado a um usuário"""
    for responsavel in banco_responsaveis['responsaveis']:
        if responsavel.id_usuario == id_usuario:
            return responsavel
    return None

def buscar_responsavel_completo(id_usuario):
    """Retorna dados combinados do responsável e usuário"""
    responsavel = buscar_responsavel_por_usuario(id_usuario)
    if not responsavel:
        return None, None
    
    usuario = buscar_usuario_por_id(id_usuario)
    return responsavel, usuario
