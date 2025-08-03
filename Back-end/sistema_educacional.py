from datetime import datetime

class Usuario:
    def __init__(self, id_usuario, nome, email, senha, tipo):
        self.id_usuario = id_usuario
        self.nome = nome
        self.email = email
        self.senha = senha
        self.tipo = tipo
        self.data_cadastro = datetime.now().strftime("%d/%m/%Y %H:%M")

class Aluno:
    def __init__(self, id_aluno, id_usuario, serie, pontos=0):
        self.id_aluno = id_aluno
        self.id_usuario = id_usuario
        self.serie = serie
        self.pontos = pontos

class Disciplina:
    def __init__(self, id_disciplina, nome, descricao):
        self.id_disciplina = id_disciplina
        self.nome = nome
        self.descricao = descricao

class Responsavel:
    def __init__(self, id_responsavel, id_usuario, telefone, email):
        self.id_responsavel = id_responsavel
        self.id_usuario = id_usuario
        self.telefone = telefone
        self.email = email

usuarios = []
alunos = []
disciplinas = []
responsaveis = []

def gerar_id(lista):
    return len(lista) + 1

def encontrar_usuario_por_email(email):
    for usuario in usuarios:
        if usuario.email == email:
            return usuario
    return None

def encontrar_usuario_por_id(id_usuario):
    for usuario in usuarios:
        if usuario.id_usuario == id_usuario:
            return usuario
    return None

def encontrar_aluno_por_id(id_aluno):
    for aluno in alunos:
        if aluno.id_aluno == id_aluno:
            return aluno
    return None

def cadastrar_usuario(nome, email, senha, tipo):
    if encontrar_usuario_por_email(email):
        print("Erro: Email já cadastrado!")
        return None
    
    novo_id = gerar_id(usuarios)
    novo_usuario = Usuario(novo_id, nome, email, senha, tipo)
    usuarios.append(novo_usuario)
    print(f"Usuário {nome} cadastrado com sucesso!")
    return novo_usuario

def cadastrar_aluno(id_usuario, serie):
    usuario = encontrar_usuario_por_id(id_usuario)
    if not usuario:
        print("Erro: Usuário não encontrado!")
        return None
    
    novo_id = gerar_id(alunos)
    novo_aluno = Aluno(novo_id, id_usuario, serie)
    alunos.append(novo_aluno)
    print(f"Aluno {usuario.nome} cadastrado com sucesso!")
    return novo_aluno

def cadastrar_disciplina(nome, descricao):
    novo_id = gerar_id(disciplinas)
    nova_disciplina = Disciplina(novo_id, nome, descricao)
    disciplinas.append(nova_disciplina)
    print(f"Disciplina {nome} cadastrada com sucesso!")
    return nova_disciplina

def cadastrar_responsavel(id_usuario, telefone, email):
    usuario = encontrar_usuario_por_id(id_usuario)
    if not usuario:
        print("Erro: Usuário não encontrado!")
        return None
    
    novo_id = gerar_id(responsaveis)
    novo_responsavel = Responsavel(novo_id, id_usuario, telefone, email)
    responsaveis.append(novo_responsavel)
    print(f"Responsável {usuario.nome} cadastrado com sucesso!")
    return novo_responsavel

def listar_usuarios():
    print("\n--- Lista de Usuários ---")
    for usuario in usuarios:
        print(f"ID: {usuario.id_usuario} | Nome: {usuario.nome} | Tipo: {usuario.tipo} | Email: {usuario.email}")

def listar_alunos():
    print("\n--- Lista de Alunos ---")
    for aluno in alunos:
        usuario = encontrar_usuario_por_id(aluno.id_usuario)
        if usuario:
            print(f"ID: {aluno.id_aluno} | Nome: {usuario.nome} | Série: {aluno.serie} | Pontos: {aluno.pontos}")

def listar_disciplinas():
    print("\n--- Lista de Disciplinas ---")
    for disciplina in disciplinas:
        print(f"ID: {disciplina.id_disciplina} | Nome: {disciplina.nome} | Descrição: {disciplina.descricao}")

def listar_responsaveis():
    print("\n--- Lista de Responsáveis ---")
    for responsavel in responsaveis:
        usuario = encontrar_usuario_por_id(responsavel.id_usuario)
        if usuario:
            print(f"ID: {responsavel.id_responsavel} | Nome: {usuario.nome} | Telefone: {responsavel.telefone} | Email: {responsavel.email}")

def fazer_login(email, senha):
    usuario = encontrar_usuario_por_email(email)
    if usuario and usuario.senha == senha:
        return usuario
    return None

def menu_admin():
    while True:
        print("\n--- Menu Admin ---")
        print("1. Cadastrar usuário")
        print("2. Cadastrar aluno")
        print("3. Cadastrar disciplina")
        print("4. Cadastrar responsável")
        print("5. Listar usuários")
        print("6. Listar alunos")
        print("7. Listar disciplinas")
        print("8. Listar responsáveis")
        print("9. Voltar")
        
        opcao = input("Escolha uma opção: ")
        
        if opcao == "1":
            nome = input("Nome: ")
            email = input("Email: ")
            senha = input("Senha: ")
            tipo = input("Tipo (admin/professor/aluno/responsavel): ")
            cadastrar_usuario(nome, email, senha, tipo)
        
        elif opcao == "2":
            listar_usuarios()
            id_usuario = int(input("ID do usuário para cadastrar como aluno: "))
            serie = input("Série do aluno: ")
            cadastrar_aluno(id_usuario, serie)
        
        elif opcao == "3":
            nome = input("Nome da disciplina: ")
            descricao = input("Descrição: ")
            cadastrar_disciplina(nome, descricao)
        
        elif opcao == "4":
            listar_usuarios()
            id_usuario = int(input("ID do usuário para cadastrar como responsável: "))
            telefone = input("Telefone: ")
            email = input("Email do responsável: ")
            cadastrar_responsavel(id_usuario, telefone, email)
        
        elif opcao == "5":
            listar_usuarios()
        
        elif opcao == "6":
            listar_alunos()
        
        elif opcao == "7":
            listar_disciplinas()
        
        elif opcao == "8":
            listar_responsaveis()
        
        elif opcao == "9":
            break
        
        else:
            print("Opção inválida!")

def menu_aluno(usuario):
    aluno = next((a for a in alunos if a.id_usuario == usuario.id_usuario), None)
    if not aluno:
        print("Você não está cadastrado como aluno!")
        return
    
    while True:
        print("\n--- Menu Aluno ---")
        print(f"Bem-vindo, {usuario.nome} (Série: {aluno.serie})")
        print("1. Ver meus pontos")
        print("2. Listar disciplinas")
        print("3. Voltar")
        
        opcao = input("Escolha uma opção: ")
        
        if opcao == "1":
            print(f"\nVocê tem {aluno.pontos} pontos acumulados!")
        
        elif opcao == "2":
            listar_disciplinas()
        
        elif opcao == "3":
            break
        
        else:
            print("Opção inválida!")

def menu_principal():
    while True:
        print("\n--- Sistema Educacional ---")
        print("1. Fazer login")
        print("2. Sair")
        
        opcao = input("Escolha uma opção: ")
        
        if opcao == "1":
            email = input("Email: ")
            senha = input("Senha: ")
            usuario = fazer_login(email, senha)
            
            if usuario:
                print(f"\nBem-vindo, {usuario.nome}!")
                
                if usuario.tipo == "admin":
                    menu_admin()
                elif usuario.tipo == "aluno":
                    menu_aluno(usuario)
                else:
                    print(f"Menu para {usuario.tipo} ainda não implementado.")
            else:
                print("\nLogin falhou! Verifique seu email e senha.")
        
        elif opcao == "2":
            print("Saindo do sistema...")
            break
        
        else:
            print("Opção inválida!")

if __name__ == "__main__":
    cadastrar_usuario("Administrador", "admin@escola.com", "123", "admin")
    cadastrar_usuario("João Silva", "joao@escola.com", "123", "aluno")
    cadastrar_aluno(2, "8º ano")
    cadastrar_usuario("Maria Souza", "maria@escola.com", "123", "aluno")
    cadastrar_aluno(3, "9º ano")
    cadastrar_usuario("Carlos Silva", "carlos@email.com", "123", "responsavel")
    cadastrar_responsavel(4, "11987654321", "carlos@email.com")
    cadastrar_disciplina("Matemática", "Aprendendo números e operações")
    cadastrar_disciplina("Português", "Gramática e interpretação de texto")
    menu_principal()
