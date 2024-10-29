EJECUTABLE = .\cgi-bin\funciones.cgi
ARCHIVOS = .\cgi-bin\funciones.cpp 
LIBRERIAS = -L. -lsqlite3
PUERTO = 8000

all: elimina compila abre_navegador abre_servidor

elimina:
	del $(EJECUTABLE)

compila: $(ARCHIVOS)
	g++ -o $(EJECUTABLE) $(ARCHIVOS) $(LIBRERIAS)

# ya no hacemos esto
ejecuta:
	$(EJECUTABLE)

abre_servidor:
	python -m http.server --cgi $(PUERTO)

abre_navegador:
	cmd /c start http://localhost:$(PUERTO)
