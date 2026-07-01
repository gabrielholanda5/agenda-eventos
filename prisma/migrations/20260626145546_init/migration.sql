-- CreateTable
CREATE TABLE "eventos" (
    "id" SERIAL NOT NULL,
    "local" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "dia_da_semana" TEXT NOT NULL,
    "blusa" TEXT NOT NULL,
    "bermuda" TEXT NOT NULL,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);
