FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
EXPOSE 80
COPY fourtitude-sboot-docker.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]