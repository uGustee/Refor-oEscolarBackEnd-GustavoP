from datetime import datetime

# Simulação de banco de dados em memória (DEEPSEEK)
banco_de_dados = {
    'usuarios': [],
    'ultimo_id': 0
}

class Usuario:
    def __init__(self, nome, cpf, email, senha, tipo_usuario):
        global banco_de_dados
        banco_de_dados['ultimo_id'] += 1
        self.id = banco_de_dados['ultimo_id']
        self.nome = nome
        self.cpf = cpf
        self.email = email
        self.senha = senha
        self.tipo = tipo_usuario
        self.data_cadastro = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        self.ultimo_acesso = None

def cadastrar_usuario(nome, cpf, email, senha, tipo='comum'):
    for usuario in banco_de_dados['usuarios']:
        if usuario.cpf == cpf:
            return False, "CPF já cadastrado"
        if usuario.email == email:
            return False, "E-mail já cadastrado"
    
    # Cria novo usuário (DEEPSEEK)
    novo_usuario = Usuario(nome, cpf, email, senha, tipo)
    banco_de_dados['usuarios'].append(novo_usuario)
    return True, "Usuário cadastrado com sucesso"

def buscar_por_email(email):
    for usuario in banco_de_dados['usuarios']:
        if usuario.email == email:
            return usuario
    return None

print("=== CADASTRO DE USUÁRIO ===")
nome = input("Digite seu nome: ")
email = input("Digite seu email: ")
senha = input("Digite sua senha: ")
tipo = input("Digite seu tipo (admin/comum/visitante): ").lower()
cpf = input("Digite seu CPF (apenas números): ")

# Validação do CPF (DEEPSEEK)
if not cpf.isdigit():
    print("Erro: CPF deve conter apenas números")
else:
    cpf_float = float(cpf)
    sucesso, mensagem = cadastrar_usuario(nome, cpf_float, email, senha, tipo)
    
    if sucesso:
        print("\n" + mensagem)
        usuario = buscar_por_email(email)
        print("\nDados cadastrados:")
        print(f"ID: {usuario.id}")
        print(f"Nome: {usuario.nome}")
        print(f"CPF: {int(usuario.cpf)}")
        print(f"E-mail: {usuario.email}")
        print(f"Tipo: {usuario.tipo.capitalize()}")
        print(f"Data Cadastro: {usuario.data_cadastro}")
    else:
        print("\nErro:", mensagem)
